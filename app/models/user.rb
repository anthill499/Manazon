# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  full_name       :string           not null
#
class User < ApplicationRecord
    
    after_initialize :ensure_session_token

    validates :username, :session_token, :password_digest, :full_name, presence: true
    validates :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :full_name, length: { minimum: 3 }

    attr_reader :password

    def self.find_by_credentials(em, pw)
        user = User.find_by(email: em)
        !user.nil? && user.is_password?(pw) ? user : nil
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save
        self.session_token
    end

end
