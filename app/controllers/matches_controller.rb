class MatchesController < ApplicationController 
    skip_before_action :confirm_authentication, only: [:index, :show, :create]
    before_action :find_match, only: [:update, :destroy]

       
    def index
       render json: Match.all, status: :ok
    end
    
    def show
       match = Match.find(params[:id])
       render json: match,  status: :ok
    end

    def create
        match = current_user.matches.create!(match_params)        
        render json: match, status: :created
    end
  
    def update    
       @match.update!(match_params)
        render json: @match, status: :accepted        
    end

    def destroy       
        @match.destroy!
        render json: @match        
    end

    private 

    def find_match
        @match = current_user.matches.find_by_id(params[:id])
        if !@match
            render json:{ error: "Not authorized" }, status: :unauthorized
        end
    end

    def match_params
        params.permit(:game, :home_team, :away_team, :home_score, :away_score, :hometeam_img_url, :awayteam_img_url)
    end
   
end
