class AddCounterToMadlibs < ActiveRecord::Migration[5.1]
  def change
    add_column :madlibs, :counter, :integer
  end
end
