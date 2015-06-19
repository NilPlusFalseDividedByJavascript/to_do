class Task < ActiveRecord::Base
  validates :contents, presence: true
  
end
