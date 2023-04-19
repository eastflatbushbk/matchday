class MatchesController < ApplicationController 
    skip_before_action :confirm_authentication, only: [:index, :show, :create, :matches_search, :most_opinions, :teams_that_lost]
    before_action :find_match, only: [:update, :destroy]

    def teams_that_lost
        homeArr =[]
        awayArr=[]

        home =  Match.all.select{|m| m.home_score < m.away_score}

        home.collect do |home| 
        homeArr << home.home_team
        end

        away =  Match.all.select{|m| m.away_score < m.home_score} 

        away.collect do |away|
        awayArr << away.away_team
        end


        teams = homeArr | awayArr  

   

        render json: teams
         
    end
    
    def top_winning_teams
    
    end
    
    def most_opinions
        match = Match.all.sort_by {|x| -x.opinions.length}
        num =(params[:n]).to_i 
         render json: match.take(num)
    end
    
    
    
    def matches_search
       match = Match.where("away_team LIKE ?", "%" + params[:term] + "%" )
       render json: match
    end

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
        # head :no_content
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
