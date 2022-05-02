const obj = `{
    "type": "SETTINGS_FETCH_SUCCESS",
    "payload": {
        "xml:lang": "en-US",
        "league_key": "412.l.2602757",
        "league_id": 2602757,
        "name": "Curtain Call - Roto",
        "url": "https://baseball.fantasysports.yahoo.com/b1/2602757",
        "draft_status": "draft",
        "draft_server": "66-196-83-246-bf1.stream.sports.yahoo.com",
        "draft_port": 443,
        "num_teams": 12,
        "edit_key": "2022-04-20",
        "weekly_deadline": "",
        "league_update_timestamp": 0,
        "scoring_type": "roto",
        "is_points_league": 0,
        "uses_fractional_points": 0,
        "league_type": "public",
        "is_pro_league": 0,
        "is_cash_league": 0,
        "is_mock_league": 1,
        "is_best_ball_league": 0,
        "current_week": 2,
        "start_week": 0,
        "start_date": "",
        "end_week": 24,
        "end_date": "2022-10-05",
        "settings": {
            "draft_type": "live",
            "is_auction_draft": 0,
            "uses_playoff": 0,
            "uses_lock_eliminated_teams": 0,
            "num_playoff_teams": 0,
            "num_playoff_consolation_teams": 0,
            "waiver_rule": "",
            "uses_faab": 0,
            "draft_time": 1650370200,
            "draft_pick_duration": 30,
            "max_teams": 12,
            "waiver_time": 0,
            "trade_end_date": "",
            "trade_ratify_type": "",
            "trade_reject_time": 0,
            "player_pool": "ALL",
            "max_weekly_adds": 0,
            "draft_together": 0,
            "sendbird_channel_url": "",
            "roster_positions": [
                {
                    "position": "C",
                    "position_type": "B",
                    "count": 1
                },
                {
                    "position": "1B",
                    "position_type": "B",
                    "count": 1
                },
                {
                    "position": "2B",
                    "position_type": "B",
                    "count": 1
                },
                {
                    "position": "3B",
                    "position_type": "B",
                    "count": 1
                },
                {
                    "position": "SS",
                    "position_type": "B",
                    "count": 1
                },
                {
                    "position": "OF",
                    "position_type": "B",
                    "count": 3
                },
                {
                    "position": "Util",
                    "position_type": "B",
                    "count": 2
                },
                {
                    "position": "SP",
                    "position_type": "P",
                    "count": 2
                },
                {
                    "position": "RP",
                    "position_type": "P",
                    "count": 2
                },
                {
                    "position": "P",
                    "position_type": "P",
                    "count": 4
                },
                {
                    "position": "BN",
                    "position_type": "BN",
                    "count": 5
                }
            ],
            "stat_categories": [
                {
                    "stat_id": 6,
                    "name": "At Bats",
                    "display_name": "AB",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "B"
                    ],
                    "operator": "sum",
                    "is_only_display_stat": 1,
                    "decimal_points": 0,
                    "is_composite_stat": 0
                },
                {
                    "stat_id": 8,
                    "name": "Hits",
                    "display_name": "H",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "B"
                    ],
                    "operator": "sum",
                    "is_only_display_stat": 1,
                    "decimal_points": 0,
                    "is_composite_stat": 0
                },
                {
                    "stat_id": 7,
                    "name": "Runs",
                    "display_name": "R",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "B"
                    ],
                    "operator": "sum",
                    "is_only_display_stat": 0,
                    "decimal_points": 0,
                    "is_composite_stat": 0
                },
                {
                    "stat_id": 12,
                    "name": "Home Runs",
                    "display_name": "HR",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "B"
                    ],
                    "operator": "sum",
                    "is_only_display_stat": 0,
                    "decimal_points": 0,
                    "is_composite_stat": 0
                },
                {
                    "stat_id": 13,
                    "name": "Runs Batted In",
                    "display_name": "RBI",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "B"
                    ],
                    "operator": "sum",
                    "is_only_display_stat": 0,
                    "decimal_points": 0,
                    "is_composite_stat": 0
                },
                {
                    "stat_id": 16,
                    "name": "Stolen Bases",
                    "display_name": "SB",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "B"
                    ],
                    "operator": "sum",
                    "is_only_display_stat": 0,
                    "decimal_points": 0,
                    "is_composite_stat": 0
                },
                {
                    "stat_id": 3,
                    "name": "Batting Average",
                    "display_name": "AVG",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "B"
                    ],
                    "operator": "avg",
                    "is_only_display_stat": 0,
                    "decimal_points": 3,
                    "is_composite_stat": 1
                },
                {
                    "stat_id": 50,
                    "name": "Innings Pitched",
                    "display_name": "IP",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "P"
                    ],
                    "operator": "avg",
                    "is_only_display_stat": 1,
                    "decimal_points": 0,
                    "is_composite_stat": 1
                },
                {
                    "stat_id": 28,
                    "name": "Wins",
                    "display_name": "W",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "P"
                    ],
                    "operator": "sum",
                    "is_only_display_stat": 0,
                    "decimal_points": 0,
                    "is_composite_stat": 0
                },
                {
                    "stat_id": 32,
                    "name": "Saves",
                    "display_name": "SV",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "P"
                    ],
                    "operator": "sum",
                    "is_only_display_stat": 0,
                    "decimal_points": 0,
                    "is_composite_stat": 0
                },
                {
                    "stat_id": 42,
                    "name": "Strikeouts",
                    "display_name": "K",
                    "stat_modifier": 0,
                    "sort_order": 1,
                    "stat_position_types": [
                        "P"
                    ],
                    "operator": "sum",
                    "is_only_display_stat": 0,
                    "decimal_points": 0,
                    "is_composite_stat": 0
                },
                {
                    "stat_id": 26,
                    "name": "Earned Run Average",
                    "display_name": "ERA",
                    "stat_modifier": 0,
                    "sort_order": 0,
                    "stat_position_types": [
                        "P"
                    ],
                    "operator": "avg",
                    "is_only_display_stat": 0,
                    "decimal_points": 2,
                    "is_composite_stat": 1
                },
                {
                    "stat_id": 27,
                    "name": "(Walks + Hits)/ Innings Pitched",
                    "display_name": "WHIP",
                    "stat_modifier": 0,
                    "sort_order": 0,
                    "stat_position_types": [
                        "P"
                    ],
                    "operator": "avg",
                    "is_only_display_stat": 0,
                    "decimal_points": 2,
                    "is_composite_stat": 1
                }
            ],
            "position_draft_caps": []
        }
    }
}`;

const jsn = JSON.parse(obj);
const positions = jsn.payload.settings.roster_positions;
const categories = jsn.payload.settings.stat_categories;
console.log(categories);
