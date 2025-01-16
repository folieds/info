document.getElementById('messageForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const telegramBotToken = "7717777159:AAGmehTlDLBYio0i-mWuWV-SIbJYXn8IlGg"; // Replace with your Telegram Bot Token
  const chatId = "6076683960"; // Replace with your Telegram Chat ID

  const text = `You have a new message from ${name}:\n\n${message}`;

  const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: text })
  });

  if (response.ok) {
    document.getElementById('responseMessage').innerText = "Message sent successfully!";
    document.getElementById('messageForm').reset();
  } else {
    document.getElementById('responseMessage').innerText = "Failed to send the message. Please try again.";
  }
});
