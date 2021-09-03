class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.time :from
      t.time :to

      t.timestamps
    end
  end
end
