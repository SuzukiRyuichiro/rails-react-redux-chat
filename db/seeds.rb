# Destroys everything
Message.destroy_all
Channel.destroy_all
User.destroy_all

# Fill with some test accounts and messages

admin = User.create(username: 'admin', email: 'mail@mail.com', password: '123123')
general = Channel.create(name: 'general')
message = Message.create(channel: general, user: admin, content: 'This is the general channel')
