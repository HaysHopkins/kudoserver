module Exceptions
  class AuthenticationError < StandardError; end
  class InvalidToken < AuthenticationError; end
  class MissingToken < AuthenticationError; end
  class InvalidCredentials < AuthenticationError; end
end