const User = `
  type User {
    id: ID!
    name: String 
    last_owner_update: String
    last_account_update: String
    created: String
    mined: Boolean
    witness_votes: [String]
    memo_key: String
    json_metadata: String
    proxy: String
    last_owner_update: String
    last_account_update: String
    created: String
    mined: Boolean
    owner_challenged: Boolean
    active_challenged: Boolean
    last_owner_proved: String
    last_active_proved: String
    recovery_account: String
    last_account_recovery: String
    reset_account: String
    comment_count: Int 
    lifetime_vote_count: Int
    post_count: Int
    can_vote: Boolean
    voting_power: Int
    last_vote_time: String
    balance: String
    savings_balance: String
    sbd_balance: String
    sbd_seconds: String
    sbd_seconds_last_update: String
    sbd_last_interest_payment: String
    savings_sbd_balance: String
    savings_sbd_seconds: String
    savings_sbd_seconds_last_update: String
    savings_sbd_last_interest_payment: String
    savings_withdraw_requests: Int
    reward_sbd_balance: String
    reward_steem_balance: String
    reward_vesting_balance: String
    reward_vesting_steem: String
    vesting_shares: String
    delegated_vesting_shares: String
    received_vesting_shares: String
    vesting_withdraw_rate: String
    next_vesting_withdrawal: String
    withdrawn: Int 
    to_withdraw: Int 
    withdraw_routes: Int
    curation_rewards: Int 
    posting_rewards: Int
    proxied_vsf_votes: [Int] 
    witnesses_voted_for: Int 
    average_bandwidth: String
    lifetime_bandwidth: String
    last_bandwidth_update: String
    average_market_bandwidth: String 
    lifetime_market_bandwidth: String 
    last_market_bandwidth_update: String
    last_post: String
    last_root_post: String
    vesting_balance: String
    reputation: String 
    posts(limit: Int): [Post]
  }
  
  extend type Query {
    # Get user data for username
    user(username: String!): User 
    @deprecated(reason: "Use account")
    # Get user data for a list of provided users
    users(users: [String]!, limit: Int): [User] 
    @deprecated(reason: "Use accounts")
  }
  `;

export default User;
