class OpinionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: @current_user.opinions.all, status: :ok
    end

    def show
        opinion = find_opinion
        render json: opinion, status: :ok
    end

    def create
        opinion = Opinion.create!(opinion_params)
        render json: opinion, status: :created
    end 
    def update
        opinion = find_opinion
        opinion.update!(opinion_params)
        render json: opinion, status: :ok
    end

    def destroy
        opinion = find_opinion
        opinion.destroy!
        head :no_content
    end

    private 

    def find_opinion
        Opinion.find(params[:id])
    end

    def opinion_params
        params.permit(:comment, :match_id, :user_id)
    end

    def 

    def render_not_found_response
        render json: { error: "Opinion not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
