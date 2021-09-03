class Api::V1::AvailabilitiesController < Api::V1::BaseController
    def index
      respond_with Availability.where(coach_id:params[:id], day_id:params[:day_id])
    end
    def create
      respond_with :api, :v1, Availability.create(availability_params)
    end
  
    def destroy
      respond_with Availability.destroy(params[:id])
    end
  
    def update
      availability = Availability.find(params["id"])
      availability.update_attributes(availability_params)
      respond_with availability, json: availability
    end
  
    private
  
    def availability_params
      params.require(:availability).permit(:id,,:day_id :min, :max)
    end
  end