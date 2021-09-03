class Api::V1::CoachesController < Api::V1::BaseController
    def index
      respond_with Coach.all
    end
  
    def create
      respond_with :api, :v1, Coach.create(day_params)
    end
  
    def destroy
      respond_with Coach.destroy(params[:id])
    end
  
    def update
      day = Coach.find(params["id"])
      day.update_attributes(day_params)
      respond_with day, json: day
    end
  
    private
  
    def day_params
      params.require(:day).permit(:id, :name, :description)
    end
  end