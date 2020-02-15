import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the chatroom");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#message-container').append('<div class="message">' + data.mod_message + '</div>');
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
    console.log(data.content);
  }
});
