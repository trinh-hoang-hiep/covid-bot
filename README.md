﻿---
title: VT Covid Bot Docs
permalink: /
---

# COVID FAQ & ChatBot

The Vermont Department of Health has a knowledge base that is published via a chatbot and faq page in response to the COVID-19 pandemic

* **VDH**: [www.healthvermont.gov/COVID](https://www.healthvermont.gov/COVID)
* **BOT**: [apps.health.vermont.gov/COVID/](https://apps.health.vermont.gov/COVID/)
* **FAQ**: [apps.health.vermont.gov/COVID/faq/](https://apps.health.vermont.gov/COVID/faq/)

## Docs

Published via [gh-pages](https://docs.github.com/en/github/working-with-github-pages/getting-started-with-github-pages), [jekyll](https://docs.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll), and [cayman theme](https://pages-themes.github.io/cayman/) at:

[**vermontdepartmentofhealth.github.io/covid-bot/**](https://vermontdepartmentofhealth.github.io/covid-bot/)



## Repo Structure

### 1. Application Insights Query

> Query written in Kusto/KQL to get info from logs in App Insights

* [App Insights Query](./ai-query/)
* [ChatBot Logs Update Instructions](./sheet-updates/)


### 2. Bot Service

> .NET Core API written in C# that connects to the knowledge base.

### 3. FAQ Site

> NodeJS static site generator written using Eleventy that templates the knowledge base into FAQ.

### 4. Knowledge Base API

> Postman collection to call methods in the Knowledge Base API

### 5. QnA Maker

> QnA Maker front end to create, maintain, test, and publish the Knowledge Base

### 6. WebChat Client

> Front end chat client that calls the bot service, either as an iFrame or JS initialization.


## Resources

* [Microsoft - Create an  Covid-19 Chatbot](https://microsoft.github.io/slg-covid-bot/)
* [QnA Maker](https://www.qnamaker.ai/)
* [ Bot Service](https://.microsoft.com/en-us/services/bot-service/)

### Forums

* [How to disable attachment in botframework](https://stackoverflow.com/q/60889643/1366033)
* [Looking for a unique “Conversation ID” in the App Insights for QnA Maker](https://stackoverflow.com/q/60880867/1366033)
* [Setting date to local variable from data query - “No tabular expression statement found”](https://stackoverflow.com/q/60322289/1366033)


## Testing

For testing purposes, please use the following links to not interfere with our production telemetry

* **BOT**: [apps-test.health.vermont.gov/COVID/](https://apps-test.health.vermont.gov/COVID/)
* **FAQ**: [apps-test.health.vermont.gov/COVID/faq/](https://apps-test.health.vermont.gov/COVID/faq/)


## Acronyms

VDH
 ~ Vermont Department of Health

FAQs
 ~ Frequently Asked Questions

KB
 ~ Knowledge Base

AI
 ~ Application Insights

QnA
 ~ Question and Answer
