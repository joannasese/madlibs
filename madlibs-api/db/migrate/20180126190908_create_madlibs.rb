class CreateMadlibs < ActiveRecord::Migration[5.1]
  def change
    create_table :madlibs do |t|
      t.string :noun
      t.string :verb
      t.string :adj

      t.timestamps
    end
  end
end
