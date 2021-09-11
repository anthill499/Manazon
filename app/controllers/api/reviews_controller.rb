class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render :index
    end
    
    def create
        @review = Review.new(review_params)
        if @review.save && logged_in?
            # render 'api/products/show'
        else
            render json: ['Invalid review'], status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.reviewer_id == current_user.id
            @review.destroy
            # render 'api/products/show'
        else
            render json: ['Could not remove review, please try again'],
        end
    end


    private
    def review_params
        params.require(:review).permit(:title, :body, :rating, :reviewer_id, :product_id)
    end
end