class MatchesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
     skip_before_action :confirm_authentication, only: [:index,:show]

    def index
        # byebug
        render json: Match.all, status: :ok
    end

    def show
        match = find_match
        render json: match, include: :opinions, status: :ok
    end

    def create
        match = Match.create!(match_params)
        user_match = Match.create!(
            user_id: @current_user.id,
            # match_id: match.id
        )
        render json: match, status: :created
    end
  
    def update
        match = find_match
        match.update!(match_params)
        render json: match, status: :ok
    end

    def destroy
        match = find_match
        match.destroy!
        head :no_content
    end

    private 

    def find_match
        Match.find(params[:id])
    end

    def match_params
        params.permit(:game, :home_team, :away_team, :home_score, :away_score, :user_id, :hometeam_img_url, :awayteam_img_url)
    end

    def 

    def render_not_found_response
        render json: { error: "Match not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
