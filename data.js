// ==================== DATA.JS - User Authentication Database ====================
// This file contains all user data separate from the main application code

const USER_DATABASE = {
    // Admin users
    'admin': {
        password: 'admin123',
        username: 'admin',
        uuid: 'ADM-001-2024',
        dateStarted: '2024-01-01',
        duration: '365 days',
        banned: false
    },
    
    // Regular users
    'john': {
        password: 'john123',
        username: 'john_doe',
        uuid: 'USR-456-2024',
        dateStarted: '2024-03-15',
        duration: '90 days',
        banned: false
    },
    
    'sarah': {
        password: 'sarah123',
        username: 'sarah_codes',
        uuid: 'USR-789-2024',
        dateStarted: '2024-02-01',
        duration: '180 days',
        banned: false
    },
    
    'mike': {
        password: 'mike123',
        username: 'mike_runner',
        uuid: 'USR-101-2024',
        dateStarted: '2024-04-01',
        duration: '60 days',
        banned: false
    },
    
    'emma': {
        password: 'emma123',
        username: 'emma_designer',
        uuid: 'USR-202-2024',
        dateStarted: '2024-03-20',
        duration: '120 days',
        banned: false
    },
    
    // Demo accounts
    'demo': {
        password: 'demo123',
        username: 'demo_user',
        uuid: 'DEMO-001-2024',
        dateStarted: '2024-01-01',
        duration: '30 days',
        banned: false
    },
    
    'test': {
        password: 'test123',
        username: 'test_user',
        uuid: 'TEST-001-2024',
        dateStarted: '2024-05-01',
        duration: '15 days',
        banned: false
    },
    
    // Premium users
    'premium': {
        password: 'premium123',
        username: 'premium_user',
        uuid: 'PRM-001-2024',
        dateStarted: '2024-01-15',
        duration: '365 days',
        banned: false
    },
    
    // VIP users
    'vip': {
        password: 'vip123',
        username: 'vip_member',
        uuid: 'VIP-001-2024',
        dateStarted: '2024-02-20',
        duration: '730 days',
        banned: false
    },
    
    // Banned users
    'banned_user': {
        password: 'banned123',
        username: 'banned_user',
        uuid: 'BAN-999-2024',
        dateStarted: '2024-01-01',
        duration: '30 days',
        banned: true
    },
    
    'hacker': {
        password: 'hack123',
        username: 'hacker_account',
        uuid: 'BAN-888-2024',
        dateStarted: '2024-02-15',
        duration: '0 days',
        banned: true
    }
};

// ==================== HELPER FUNCTIONS ====================

// Validate login credentials
function validateUserCredentials(username, password) {
    const user = USER_DATABASE[username.toLowerCase()];
    
    if (!user) {
        return { valid: false, reason: 'User does not exist' };
    }
    
    if (user.password !== password) {
        return { valid: false, reason: 'Incorrect password' };
    }
    
    if (user.banned) {
        return { valid: false, reason: 'Account is banned' };
    }
    
    return { valid: true, user: user };
}

// Make it available globally
window.USER_DATABASE = USER_DATABASE;
window.validateUserCredentials = validateUserCredentials;

console.log(`📊 Data.js loaded: ${Object.keys(USER_DATABASE).length} users in database`);
