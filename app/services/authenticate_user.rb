class AuthenticateUser
  def initialize(username, password)
    @username = username
    @password = password
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :username, :password

  def user
    user = User.find_by_username(username)
    raise Exceptions::InvalidCredentials unless user && user.authenticate(password)
    user
  end
end