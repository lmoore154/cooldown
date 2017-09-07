class ReservationSlot < ApplicationRecord
  belongs_to :location

  scope :available, -> { where(booked_by: nil) }

  def book!(params)
    @booking = true
    update params
  ensure
    @booking = false
  end
end
