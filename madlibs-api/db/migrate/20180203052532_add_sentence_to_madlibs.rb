class AddSentenceToMadlibs < ActiveRecord::Migration[5.1]
  def change
    add_column :madlibs, :sentence, :string
  end
end
