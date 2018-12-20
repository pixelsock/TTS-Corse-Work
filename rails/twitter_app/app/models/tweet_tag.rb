class TweetTag < ApplicationRecord
  belongs_to :Tweet
  belogns_to :tag
end
