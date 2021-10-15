class Api::ProductsController < ApplicationController
    
    #front/end
    def index
        @products = query ? @products = Product.all.select { |product| product.title.downcase.include?(query.downcase) || product.description.downcase.include?(query.downcase)} : Product.all
        render :index
    end

    # Finding specific product
    def show
        @product = Product.find(params[:id])
        render :show
    end

    def query
        params[:query]
    end

end
