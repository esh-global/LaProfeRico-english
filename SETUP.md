# La Profe Rico: setup guide

Netlify's menu names change from time to time. If a label doesn't match exactly, look for the closest one.

---

## 1. Put the site online (Netlify)

1. Add your photos to the `images` folder (names are listed in `images/PUT-PHOTOS-HERE.txt`). You can also do this later and redeploy.
2. Go to **app.netlify.com** and log in (or sign up for free).
3. **Add new project → Deploy manually**, or go straight to **app.netlify.com/drop**.
4. Drag the whole `la-profe-rico` **folder** (not the zip) onto the page.
5. Netlify gives you a random address like `sparkly-otter-123.netlify.app`. To change it, go to **Project configuration → General → Change project name** and pick something like `laprofe-rico`. Your site will then be at `laprofe-rico.netlify.app`.

**To update the site later:** open your project → **Deploys** tab → drag the updated folder onto the drop area at the bottom.

---

## 2. Turn on Netlify Forms (required for the contact form)

The form won't collect anything until you do this.

1. Open your project on Netlify → **Forms** (left menu).
2. Click **Enable form detection**.
3. **Redeploy**: drag the folder in again on the Deploys tab. Netlify only finds the form during a deploy, so this step matters.
4. Go back to **Forms**. You should see a form called **contact**.
5. **Email alerts:** **Project configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email notification**. Enter `ehteachesenglish@gmail.com` and choose the **contact** form.
6. **Test it:** submit the form on your live site. You should land on the "Thank you" page, see the entry under **Forms → contact**, and get an email. Check spam the first time and mark it "Not spam."

Notes:
- Each submission includes a `site-language` field (en / es / zh) so you know which version of the site the person used.
- The free plan allows about **100 submissions per month**, which is plenty for now.
- Spam filtering (a hidden "honeypot" field) is already built in.

---

## 3. Cal.com booking

### A. Set up the account
1. Sign up at **cal.com** (the free plan is enough). Choose a username, for example `laprofe-rico`.
2. **Time zone:** Europe/Madrid.
3. **Connect Google Calendar:** **Apps → Google Calendar → Install**, then sign in with your Google account.
   - This blocks times that are already busy on your Google Calendar, and new bookings get added to it.
   - In **Settings → Calendars**, make sure "Add to calendar" points to your main Google Calendar.

### B. Availability
**Availability → edit your schedule:** set the days you work, **10:00–20:00**.
The last 1-hour session will start at 19:00, which keeps you finished by 20:00.

### C. Your "One Hour Session" event: step by step

Open **Event Types → One Hour Session**, then:

**Event Setup tab**
- Description: remove "video call". Example: *"In-person English tutoring within the M-30 (your home, my home, or school pickup on request)."*
- ⚠️ **Do NOT change the URL/slug `60minweb`.** The website is linked to it.
- Location: delete Cal Video / Google Meet → **Add a location → In Person (Attendee Address)**. Optionally also add **In Person (Organizer Address)**.
- Save.

**Availability** (left menu) → your schedule → work days **10:00–20:00**, time zone **Europe/Madrid** → Save. In the event's **Availability** tab, make sure that schedule is selected.

**Limits tab**
- **Minimum notice: 24 hours**. This is the no-last-minute rule.
- **Buffer after event: 30 min** (use 45 if commutes are usually longer). Before event: none.
- **Time-slot intervals: 30 minutes.** Important: without this, a 30-min buffer pushes the next available start a full hour later (10:00 session → next slot 12:00 instead of 11:30).
- Optional: **Limit future bookings** (e.g. 60 days ahead).

**Recurring tab** → on → every **1 week**, max **36** occurrences (≈ one school year).

**Advanced tab** → **Requires confirmation: ON.** You approve every booking before it's final. Booking questions: *Student's age*, *What do you need help with?*, *Which exam, if any?*

**Test:** open `cal.com/erika-laprofe-english/60minweb` in a private window: early slots tomorrow greyed out, slots 10:00–19:00, a 30-min gap after bookings, "repeat weekly" option visible. Make a test booking → check it lands in Google Calendar → cancel it.

### C2. Your free "15 Minute Meeting" (optional intro, in person or video): step by step
The website's **"Book a free intro"** button opens this event in a pop-up. Make sure it is **not hidden** in Event Types.

Open **Event Types → 15 Minute Meeting**, then:

**Event Setup tab**
- Title: *Free 15-min intro (in person or video)*
- Description: *"Optional and free. Let's meet, talk about your child's needs and goals, and see if we're a good fit. Choose in person (within the M-30) or video."*
- ⚠️ **Do NOT change the URL/slug `15min`.** The website is linked to it.
- **Location: add BOTH options.** Parents pick one when booking:
  1. **In Person (Attendee Address)**
  2. **Cal Video** or **Google Meet**
- Save.

**Limits tab**
- **Minimum notice: 24 hours.**
- **Buffer before event: 15 min** and **Buffer after event: 15 min.** Enough to wrap up a lesson or errand. Because you confirm every intro yourself, you decide whether it fits your route and day.
- **Time-slot intervals: 30 min.**
- Recommended: **Limit booking frequency → 2 per day**, so intros don't eat your teaching hours.

**Advanced tab**
- **Requires confirmation: ON.** You approve each intro, so you can fit in-person ones around your errands, commute or exercise, or suggest another time or video. Parents get an automatic email once you confirm.
- Booking questions: *Student's age*, *What do you need help with?*

**Recurring tab:** leave **off**.

### C3. Handling booking requests (both events)
Because **Requires confirmation** is on for both events:
- You'll get an email for every request. Open it, or go to **Bookings → Unconfirmed** in Cal.com, and click **Confirm** or **Reject** (you can add a note, e.g. suggesting another time).
- The slot stays held while the request is pending, so nobody else can take it.
- **Reply within a few hours.** Cal.com doesn't send you reminders, and parents who wait a day may book someone else.
- Tip: turn on Cal.com email notifications on your phone, or install the Cal.com app, so requests don't sit unnoticed.
- Later, once you have regular families, you can switch confirmation off for the 1-hour session and keep it on for intros.

**Test:** on the live site, click **Book a free intro**. A pop-up should open with 15-minute slots and a choice of in person or video.

### D. Connect it to the website (DONE)
The site is already connected to both events:
- **One Hour Session** (calendar on the page): `cal.com/erika-laprofe-english/60minweb` → `CAL_LINK` in index.html
- **15 Minute Meeting** (the "Book a free intro" pop-up): `cal.com/erika-laprofe-english/15min` → `CAL_INTRO_LINK` in index.html

If you ever want a different event on the site, open `index.html`, search for `CAL_LINK`, and replace the text between the quotes with everything after `cal.com/`, for example:
```js
const CAL_LINK = "erika-laprofe-english/60minweb";
```
Then redeploy.

---

## 4. The "app" (Add to Home Screen)

This part is already built, so there's nothing to set up. It only works once the site is live on Netlify (not when you open the file on your computer).

**What parents see:**
- **iPhone/iPad (Safari):** a few seconds after the page opens, a small card at the bottom says *Tap [Share icon] then "Add to Home Screen."* Your icon (the girl with the "Eng" speech bubble) then appears on their phone and opens the site full-screen, like an app.
- **Android (Chrome):** the same card appears with an **Install** button.
- If someone closes the card, it doesn't come back. There's also a small **"Add to Home Screen"** link in the footer.

**Try it yourself:** open your Netlify address in Safari on your iPhone → Share → Add to Home Screen.

**Updates:** when you redeploy the site, the home-screen app updates automatically.

**Files that make this work (don't rename or delete):** `manifest.webmanifest`, `sw.js`, `netlify.toml`, and the `icons` folder. To change the app icon, replace the PNGs in `icons/` with images of the same size and name. A ready-made alternative (open book + "Eng" bubble) is in `icons/alt-book/`: copy those files into `icons/` and redeploy.

---

## 5. Quick edits you might want

Open `index.html` in any text editor (TextEdit in plain-text mode, Notepad, or VS Code) and search for:

| To change | Search for |
|---|---|
| Gallery captions | `[caption 1]` … `[caption 5]` (each appears twice on its line; replace both) |
| Site name | `const BRAND` in index.html, **plus** `name`/`short_name` in `manifest.webmanifest` and `apple-mobile-web-app-title` in index.html (so the home-screen label matches) |
| Booking link | `const CAL_LINK` |
| Any English text | the text itself, inside the `en:{` block near the bottom |
| Spanish text | inside the `es:{` block |
| Chinese / Taiwan text & NT$ prices | inside the `zh:{` block (`pr1_amt`, `pr2_amt`) |
| Email address | `ehteachesenglish@gmail.com` (appears 3 times) |

**Important:** the visible text on the page is filled in from those `en / es / zh` blocks. If you change a sentence in the page body but not in the `en:{` block, your change will be overwritten. Always edit the blocks. Gallery captions are the only exception: edit them directly where they are.

---

## 6. Before you launch: checklist
- [ ] Photos uploaded with the exact file names
- [ ] Captions replaced
- [ ] Forms enabled + redeployed + test submission received
- [ ] Email notification set up
- [ ] Cal.com event checked: 24h minimum notice, 10:00–20:00, 30-min buffer + 30-min slot intervals, recurring on, in-person location, 15-min intro visible, in-person + video locations, 15-min buffers before & after; **requires confirmation ON for both events**, slugs still `60minweb` and `15min`
- [ ] Added the site to your own iPhone home screen to check the icon
- [ ] A native Spanish speaker and a native Taiwanese reader have skimmed their language versions
