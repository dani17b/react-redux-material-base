import * as types from '../../../constants/ActionTypes';

const initialState = {
  "ranking" : [],
  "news" : [],
  "league" : null
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_LEAGUE:
        return {
          ...state,
          league : action.league
        };
      break;
    case types.LOAD_RANKING_RESPONSE:
      return {
        ...state,
        ranking : action.ranking
      }
    case types.LOAD_NEWS_RESPONSE:
      return {
        ...state,
        news : action.news
      }
    default:
      return state;
  }
}
