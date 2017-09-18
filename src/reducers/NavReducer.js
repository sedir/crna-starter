/**
 * Created by sedir on 17/09/17.
 */
import { AppNavigator } from "../navigators/AppNavigator"

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('LoginForm'));

export default (state = initialState, action) => {
  return AppNavigator.router.getStateForAction(action, state) || state;
};
