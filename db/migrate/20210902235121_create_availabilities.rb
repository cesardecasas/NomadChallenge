class CreateAvailabilities < ActiveRecord::Migration[6.1]
  def change
    create_table :availabilities do |t|
      t.string :min
      t.string :max

      t.timestamps
    end
  end
end
