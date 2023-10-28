class OpinionsController < ApplicationController
    skip_before_action :confirm_authentication, only: [:index, :show, :create, :search]
    before_action :find_opinion, only: [:update, :destroy]

    def search

        opinion = Opinion.where("comment Like ?" , "%" + params[:search] + "%")
        render json: opinion
    
    end
    
    
    def index
        render json: Opinion.all , status: :ok
    end

    def show
        opinion = Opinion.find(params[:id])
        render json: opinion, status: :ok
    end

    def create
        opinion = current_user.opinions.create!(opinion_params)
        render json: opinion, status: :created
    end 

    def update
        @opinion.update!(opinion_params)
        render json: @opinion, status: :ok
    end

    def destroy
        @opinion.destroy!
        head :no_content
    end

    private 

    def find_opinion
        @opinion = current_user.opinions.find_by_id(params[:id])
        if !@opinion
            render json:{ error: "Not authorized" }, status: :unauthorized
        end
    end

    def opinion_params
        params.permit(:comment, :match_id)
    end
end
