# Prep Phase - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Setup Database
1. Open your Supabase dashboard
2. Go to SQL Editor
3. Run the seed file: [`database-seed.sql`](file:///c:/Users/Pranav/Desktop/C_squared/MVP/c2c-mvp/database-seed.sql)
   - This creates 6 modules, prerequisites, questions, and test user progress

### Step 2: Start Backend API
```bash
cd c:\Users\Pranav\Desktop\C_squared\MVP\c2c-mvp
python -m uvicorn api.main:app --reload --port 8000
```

Verify it's running: Open browser at `http://localhost:8000/api/prep_modules`

### Step 3: Start Frontend
```bash
npm run dev
```

Open browser at: `http://localhost:3000/dashboard/prep`

---

## ✅ What You Should See

**Initial State (from seed data):**
- ✅ **Module 1 (Aptitude)**: Unlocked, 65% complete, blue border
- 🔒 **Modules 2-6**: All locked (gray, opacity 60%, lock icon)

**Click Aptitude module:**
- Expands smoothly
- Shows 3 topics: Quantitative Aptitude, Logical Reasoning, Verbal Ability
- Each topic has a "Start" button (opens quiz modal)

**Click any locked module:**
- Toast appears: "Complete previous module first!"
- Module doesn't expand

---

## 🧪 Test Sequential Unlocking

Run this SQL in Supabase to unlock DSA:
```sql
UPDATE USER_PROGRESS 
SET is_completed = true, progress_percentage = 100 
WHERE user_id = 1 AND module_id = 1;
```

Refresh the page → DSA should now be unlocked!

---

## 📁 Files Created

**Backend:**
- [`api/prep_modules.py`](file:///c:/Users/Pranav/Desktop/C_squared/MVP/c2c-mvp/api/prep_modules.py) - API endpoints
- [`api/main.py`](file:///c:/Users/Pranav/Desktop/C_squared/MVP/c2c-mvp/api/main.py) - Updated with CORS

**Frontend:**
- [`lib/types.ts`](file:///c:/Users/Pranav/Desktop/C_squared/MVP/c2c-mvp/lib/types.ts) - TypeScript types
- [`lib/api-client.ts`](file:///c:/Users/Pranav/Desktop/C_squared/MVP/c2c-mvp/lib/api-client.ts) - API utilities
- [`app/dashboard/prep/page.tsx`](file:///c:/Users/Pranav/Desktop/C_squared/MVP/c2c-mvp/app/dashboard/prep/page.tsx) - Main component
- [`app/globals.css`](file:///c:/Users/Pranav/Desktop/C_squared/MVP/c2c-mvp/app/globals.css) - Glassmorphism styles

**Database:**
- [`database-seed.sql`](file:///c:/Users/Pranav/Desktop/C_squared/MVP/c2c-mvp/database-seed.sql) - Sample test data

---

## 🎨 Visual Features

✅ **Glassmorphism** - Blurred, translucent cards\
✅ **Sequential Locking** - Modules unlock in order\
✅ **Smooth Animations** - Framer-motion accordion\
✅ **Deep Navy Theme** - Dark mode with blue/orange accents\
✅ **Progress Tracking** - Real-time from database\
✅ **Toast Notifications** - User feedback for locked modules

---

## 📖 Full Documentation

For detailed implementation details, API reference, and troubleshooting:
- [Walkthrough](file:///C:/Users/Pranav/.gemini/antigravity/brain/ae0fd4d7-a9ce-4d82-bef5-c0c82faa2765/walkthrough.md)
- [Implementation Plan](file:///C:/Users/Pranav/.gemini/antigravity/brain/ae0fd4d7-a9ce-4d82-bef5-c0c82faa2765/implementation_plan.md)

---

## 🐛 Troubleshooting

**API not responding?**
- Check FastAPI server is running on port 8000
- Verify CORS origins include `http://localhost:3000`

**No modules showing?**
- Run `database-seed.sql` in Supabase
- Check browser console for API errors
- Verify environment variables (`SUPABASE_URL`, `SUPABASE_KEY`)

**Modules not locking correctly?**
- Check `MODULE_PREREQUISITES` table has correct data
- Verify `USER_PROGRESS` percentages are accurate
- Console log in browser shows locking logic

---

**Ready to test!** 🚀
