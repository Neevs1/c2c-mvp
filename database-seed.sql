-- Sample SQL seed data for testing the Prep Phase implementation
-- Run this in your Supabase SQL editor to populate test data

-- 1. Insert Modules (Preparatory Phase)
INSERT INTO MODULES (id, title, description, phase_type, module_order, icon_name) VALUES
(1, 'Aptitude & Logic', 'Quantitative & Logical Reasoning', 'preparatory', 1, 'brain'),
(2, 'Data Structures (DSA)', 'Data Structures & Algorithms', 'preparatory', 2, 'code'),
(3, 'Object Oriented Programming (OOP)', 'OOP Concepts & Design Patterns', 'preparatory', 3, 'cpu'),
(4, 'Database Management (DBMS)', 'SQL, NoSQL & Database Design', 'preparatory', 4, 'database'),
(5, 'Computer Networks (CN)', 'Networking & Protocol Fundamentals', 'preparatory', 5, 'globe'),
(6, 'Theory of Computation (TOC)', 'Automata & Formal Languages', 'preparatory', 6, 'book');

-- 2. Insert Module Prerequisites (Sequential locking)
INSERT INTO MODULE_PREREQUISITES (module_id, required_module_id) VALUES
(2, 1),  -- DSA requires Aptitude
(3, 2),  -- OOP requires DSA
(4, 3),  -- DBMS requires OOP
(5, 4),  -- CN requires DBMS
(6, 5);  -- TOC requires CN

-- 3. Insert Sample Questions with Topics

-- Aptitude Module (ID: 1)
INSERT INTO QUESTIONS (module_id, topic, question_text, options, correct_answer) VALUES
(1, 'Quantitative Aptitude', 'If 5 workers can complete a task in 12 days, how many days will 3 workers take?', '["20", "15", "18", "24"]', 0),
(1, 'Quantitative Aptitude', 'A train travels 60 km/h. How far will it travel in 3.5 hours?', '["180 km", "210 km", "240 km", "270 km"]', 1),
(1, 'Logical Reasoning', 'If all roses are flowers and some flowers fade quickly, which is true?', '["All roses fade quickly", "Some roses may fade quickly", "No roses fade quickly", "None"]', 1),
(1, 'Logical Reasoning', 'Find the next number: 2, 6, 12, 20, 30, ?', '["42", "40", "38", "36"]', 0),
(1, 'Verbal Ability', 'Choose the correct synonym for "Eloquent":', '["Silent", "Fluent", "Boring", "Dull"]', 1),
(1, 'Verbal Ability', 'Identify the error: "Each of the students have submitted their assignments."', '["Each", "have", "their", "No error"]', 1);

-- DSA Module (ID: 2)
INSERT INTO QUESTIONS (module_id, topic, question_text, options, correct_answer) VALUES
(2, 'Arrays & Strings', 'What is the time complexity of binary search?', '["O(n)", "O(log n)", "O(n^2)", "O(1)"]', 1),
(2, 'Arrays & Strings', 'Which operation is NOT efficient in arrays?', '["Access", "Insert at beginning", "Search", "Update"]', 1),
(2, 'Trees & Graphs', 'Which traversal uses a queue?', '["Preorder", "Inorder", "Level-order", "Postorder"]', 2),
(2, 'Trees & Graphs', 'What is the height of a BST with 7 nodes in best case?', '["2", "3", "4", "7"]', 0),
(2, 'Dynamic Programming', 'Which approach does DP use?', '["Divide & Conquer", "Greedy", "Memoization", "Backtracking"]', 2),
(2, 'Dynamic Programming', 'Fibonacci using DP has complexity:', '["O(2^n)", "O(n)", "O(n^2)", "O(log n)"]', 1);

-- OOP Module (ID: 3)
INSERT INTO QUESTIONS (module_id, topic, question_text, options, correct_answer) VALUES
(3, 'OOP Fundamentals', 'Which is NOT an OOP principle?', '["Encapsulation", "Inheritance", "Compilation", "Polymorphism"]', 2),
(3, 'OOP Fundamentals', 'What is abstraction?', '["Hiding implementation", "Code reuse", "Multiple forms", "Data bundling"]', 0),
(3, 'Design Patterns', 'Singleton pattern ensures:', '["One instance", "Multiple inheritance", "Code reuse", "Loose coupling"]', 0),
(3, 'Design Patterns', 'Factory pattern is which type?', '["Structural", "Behavioral", "Creational", "None"]', 2);

-- DBMS Module (ID: 4)
INSERT INTO QUESTIONS (module_id, topic, question_text, options, correct_answer) VALUES
(4, 'SQL Basics', 'Which SQL command retrieves data?', '["INSERT", "SELECT", "UPDATE", "DELETE"]', 1),
(4, 'SQL Basics', 'What does FOREIGN KEY ensure?', '["Uniqueness", "Referential integrity", "Non-null", "Indexing"]', 1),
(4, 'Normalization', 'First Normal Form removes:', '["Transitive dependency", "Partial dependency", "Repeating groups", "None"]', 2),
(4, 'Normalization', 'Which is the highest normal form?', '["1NF", "2NF", "3NF", "BCNF"]', 3);

-- CN Module (ID: 5)
INSERT INTO QUESTIONS (module_id, topic, question_text, options, correct_answer) VALUES
(5, 'Network Layers', 'How many layers in OSI model?', '["5", "6", "7", "8"]', 2),
(5, 'Network Layers', 'Which layer handles routing?', '["Physical", "Data Link", "Network", "Transport"]', 2),
(5, 'TCP/IP', 'TCP is which type of protocol?', '["Connectionless", "Connection-oriented", "Hybrid", "None"]', 1),
(5, 'TCP/IP', 'Which protocol uses UDP?', '["HTTP", "FTP", "DNS", "SMTP"]', 2);

-- TOC Module (ID: 6)
INSERT INTO QUESTIONS (module_id, topic, question_text, options, correct_answer) VALUES
(6, 'Automata Theory', 'DFA stands for:', '["Deterministic Finite Automata", "Dynamic Finite Automata", "Direct Finite Automata", "None"]', 0),
(6, 'Automata Theory', 'NFA can have how many next states?', '["0", "1", "0 or more", "Exactly 2"]', 2),
(6, 'Formal Languages', 'Which is most powerful grammar?', '["Type 0", "Type 1", "Type 2", "Type 3"]', 0),
(6, 'Formal Languages', 'Regular expressions represent:', '["Type 0", "Type 1", "Type 2", "Type 3"]', 3);

-- 4. Insert User Progress (Sample for testing)
-- This creates a scenario where:
-- - Aptitude is 65% complete (unlocked, in progress)
-- - DSA is locked (Aptitude not 100%)
-- - All others are locked

INSERT INTO USER_PROGRESS (user_id, module_id, is_completed, progress_percentage) VALUES
(1, 1, false, 65),
(1, 2, false, 0),
(1, 3, false, 0),
(1, 4, false, 0),
(1, 5, false, 0),
(1, 6, false, 0);

-- To test unlocking, update Aptitude to 100%:
-- UPDATE USER_PROGRESS SET is_completed = true, progress_percentage = 100 WHERE user_id = 1 AND module_id = 1;
