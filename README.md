# CLAN_BATTLE_POLL

　ディスコードのPOLL BOT を利用して、イベントの参加者が何人いるか確認をする。

## 使い方


- `.env_template` を `.env` に変更
- `.env` に Discord の `WEBHOOK_URL` を指定する

```
WEBHOOK_URL='https://discordapp.com/api/webhooks/************/************'
```

アンケートを実行したいときに、index.handler を呼び出す。

現在 AWS Lambda を利用して、cron 設定して、指定時間にアンケートを実行中。
