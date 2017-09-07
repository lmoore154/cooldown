class ReservationSlotsController < ApplicationController

  def index
    render json: ReservationSlot.available.includes(:location)
  end

  def update
    slot = ReservationSlot.find params[:id]
    if slot.book! reservation_slot_params
      render json: slot
    else
      render slot.errors.full_messages, status: 400
    end
  end

  private

  def reservation_slot_params
    params.require(:reservation_slot).permit(:booked_by, :phone_number, :email)
  end
end
