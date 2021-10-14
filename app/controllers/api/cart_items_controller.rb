# :create, :index, :update, :destroy
class Api::CartItemsController < ApplicationController 
      before_action :ensure_logged_in, only: [:index, :show, :create, :update, :destroy]

      def index 
        @cart_items = current_user.cart_items
        render :index 
      end

      def show 
        @cart_item = CartItem.find(params[:id])
        render :show
      end

      def create 
        @cart_item = CartItem.new(cart_item_params)
            if @cart_item.save 
                render :show 
            else 
                render json: ["Could not add to cart, please try again"], status: 422
            end 
      end

      def update
        @cart_item = CartItem.find(params[:id])
            if @cart_item && @cart_item.update(cart_item_params)
                render :show 
            else 
                render json: ["Could not add to cart, please try again"], status: 422
            end 
      end

      def destroy
        @cart_item = CartItem.find(params[:id])
        if @cart_item
            @cart_item.destroy
        else
            render json: ["Could not update cart"], status: 422
        end
        render :show
      end 

      private 
      def cart_item_params 
            params.require(:cart_item).permit(:shopper_id, :product_id, :product_quantity)
      end
end