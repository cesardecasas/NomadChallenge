class Api::V1::DaysController < Api::V1::BaseController
    def index
      respond_with Day.where(coach_id:params[:id])
    end
  
    def create
      respond_with :api, :v1, Day.create(day_params)
    end
  
    def destroy
      respond_with Day.destroy(params[:id])
    end
  
    def update
      day = Day.find(params["id"])
      day.update_attributes(day_params)
      respond_with day, json: day
    end
  
    private
  
    def day_params
      params.require(:day).permit(:id, :name)
    end
  end