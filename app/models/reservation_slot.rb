class ReservationSlot < ApplicationRecord
  belongs_to :location

  scope :available, -> { where(booked_by: nil) }
end
