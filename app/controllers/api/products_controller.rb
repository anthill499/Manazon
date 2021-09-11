class Api::ProductsController < ApplicationController
    
    #front/end
    def index
        @products = Product.all
        render :index
    end
    
    # Finding specific product
    def show
        @product = Product.find(params[:id])
        render :show
    end
end
