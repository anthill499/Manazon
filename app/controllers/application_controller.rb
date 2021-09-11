class ApplicationController < ActionController::Base
    
    #CHELLL
    helper_method :ensure_logged_in, :logged_in?, :current_user
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        render json: ['Not currently logged in'], status: 401 if !logged_in?
    end

    def logged_in?
        !!current_user
    end

    def log_in(user)
        session[:session_token] = user.session_token
        current_user = user
    end
    
    def log_out
        current_user.reset_session_token!
        session[:session_token] = nil
    end
end
