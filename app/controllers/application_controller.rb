class ApplicationController < ActionController::API
  include ActionController::Cookies
#   before_action :confirm_authentication

 
#   def current_user
#     @current_user = User.find_by_id(session[:user_id])
#   end
#   private
#  def confirm_authentication
#     @current_user = User.find_by_id(session[:user_id])
#     render json: { errors: ["Not authorized"]}, status: :unauthorized unless @current_user
#   end

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

before_action :confirm_authentication

def current_user
  @current_user = User.find_by_id(session[:user_id])
end

private
def confirm_authentication
  @current_user = User.find_by_id(session[:user_id])
  render json: { errors: ["Not Authorized"] }, status: :unauthorized unless @current_user
end

# Error handling methods
def render_not_found_response
  render json: { errors:  ["Not found"] }, status: :not_found
end

def render_unprocessable_entity_response(exception)
  render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
end

end
