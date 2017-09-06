class CreateReservationSlots < ActiveRecord::Migration[5.1]
  def change
    create_table :reservation_slots do |t|
      t.references :location, foreign_key: true
      t.datetime :start_time
      t.datetime :end_time
      t.string :booked_by
      t.string :phone_number
      t.string :email

      t.timestamps
    end
  end
end
