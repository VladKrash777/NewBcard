import { Route, Routes } from 'react-router-dom'
import CardDetailsPage from '../cards/pages/CardDetailsPage'
import CardsPage from '../cards/pages/CardsPage'
import AboutPage from '../pages/AboutPage'
import ErrorPage from '../pages/ErrorPage'
import SandboxMenu from '../sandbox/SandboxMenu'
import ComponentMenu from '../sandbox/components/ComponentMenu'
import Logic from '../sandbox/components/Logic'
import Template from '../sandbox/components/Template'
import Styles from '../sandbox/components/styles/Styles'
import CustomCounterHook from '../sandbox/custom-hooks/CustomCounterHook'
import CustomHookMenu from '../sandbox/custom-hooks/CustomHookMenu'
import CustomName from '../sandbox/custom-hooks/CustomName'
import InitialCycle from '../sandbox/life-cycle-hooks/InitialCycle'
import LifeCycleExe from '../sandbox/life-cycle-hooks/LifeCycleExe'
import LifeCycleHooks from '../sandbox/life-cycle-hooks/LifeCycleHooksMenu'
import UseEffectAsComponentDidMount from '../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount'
import UseEffectAsComponentDidUpdate from '../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate'
import UseEffectAsComponentWillUnmount from '../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount'
import UseEffectNoDependencies from '../sandbox/life-cycle-hooks/UseEffectNoDependencies'
import UseStateCycle from '../sandbox/life-cycle-hooks/UseStateCycle'
import Memoization from '../sandbox/memoization/Memoization'
import UseCallback from '../sandbox/memoization/use-callback/UseCallback'
import UseMemo from '../sandbox/memoization/use-memo/UseMemo'
import LoginPage from '../users/pages/LoginPage'
import SignupPage from '../users/pages/SignupPage'
import ROUTES, { SANDBOX_ROUTES } from './routesModel'
import ConditionalRendering from '../sandbox/conditional-rendering/ConditionalRendering'
import OnClick from '../sandbox/events/OnClick'
import RaisingEvents from '../sandbox/events/RaisingEvents'
import Babel from '../sandbox/introduction/Babel'
import Loops from '../sandbox/iterations/Loops'
import MuiSandbox from '../sandbox/mui-sandbox/MuiSandbox'
import LayoutMenu from '../sandbox/mui-sandbox/layout/LayoutMenu'
import MuiBox from '../sandbox/mui-sandbox/layout/MuiBox'
import MuiContainer from '../sandbox/mui-sandbox/layout/MuiContainer'
import MuiGrid from '../sandbox/mui-sandbox/layout/MuiGrid'
import MuiStack from '../sandbox/mui-sandbox/layout/MuiStack'
import DataMenu from '../sandbox/mui-sandbox/data-display/DataMenu'
import MuiButton from '../sandbox/mui-sandbox/data-display/MuiButton'
import MuiDivider from '../sandbox/mui-sandbox/data-display/MuiDivider'
import MuiTypography from '../sandbox/mui-sandbox/data-display/MuiTypography'
import PropsMenu from '../sandbox/props/PropsMenu'
import FatherPropsObject from '../sandbox/props/props-object/FatherPropsObject'
import FatherPropsString from '../sandbox/props/props-string/FatherPropsString'
import PropsTs from '../sandbox/props/props-ts/PropsTs'
import FatherPropsTwoKeys from '../sandbox/props/props-two-keys/FatherPropsTwoKeys'
import UseMenu from '../sandbox/use-state/UseMenu'
import SetPosts from '../sandbox/use-state/SetPosts'
import UseState from '../sandbox/use-state/UseState'
import UseStateWithFunction from '../sandbox/use-state/UseStateWithFunction'
import UseStateWithObject from '../sandbox/use-state/UseStateWithObject'
import UseStateWithArrayOfObjects from '../sandbox/use-state/UseStateWithArrayOfObjects'
import UseStateWithComplexObject from '../sandbox/use-state/UseStateWithComplexObject'
import ContextMenu from '../sandbox/context/ContextMenu'
import A from '../sandbox/context/components/A'
import SnackExample from '../sandbox/context/SnackExample'
import EventsMenu from '../sandbox/events/EventsMenu'
import StringInterpolation from '../sandbox/components/StringInterpolation'
import SandboxComponents from '../sandbox/components/SandboxComponents'
import FormTest from '../sandbox/forms/FormTest'
import FavCardsPage from '../cards/pages/FavCardsPage'
import MyCardsPage from '../cards/pages/MyCardsPage'
import CreateCardPage from '../cards/pages/CreateCardPage'
import EditProfile from '../users/pages/EditProfile'


const Router = () => {
	return (
		<Routes>
			<Route path={ROUTES.ROOT} element={<CardsPage />} />
			<Route path={ROUTES.CARDS} element={<CardsPage />} />
			<Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
			<Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
			<Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
			<Route path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
			<Route
				path={`${ROUTES.CARD_DETAILS}/:cardId`}
				element={<CardDetailsPage />}
			/>
			<Route path={ROUTES.ABOUT} element={<AboutPage />} />
			<Route path={ROUTES.SIGNUP} element={<SignupPage />} />
			<Route path={ROUTES.LOGIN} element={<LoginPage />} />

			{/* SANDBOX ROUTES */}
			<Route path={ROUTES.SANDBOX} element={<SandboxMenu />}>
				<Route path={SANDBOX_ROUTES.COMPONENT} element={<ComponentMenu />}>
					<Route path={SANDBOX_ROUTES.TEMPLATE} element={<Template />} />
					<Route path={SANDBOX_ROUTES.LOGIC} element={<Logic />} />
					<Route path={SANDBOX_ROUTES.STYLES} element={<Styles />} />
					<Route path={SANDBOX_ROUTES.STRINGINTERPOLATION} element={<StringInterpolation />} />
				
				</Route>
										{/* HOMEWORK RENDERS */}
				<Route path={SANDBOX_ROUTES.CONDITIONALRENDERING} element={<ConditionalRendering/>} />
										{/* EVENTS */}
				<Route path={SANDBOX_ROUTES.EVENTS_FOLDER} element={<EventsMenu/>}>
					<Route path={SANDBOX_ROUTES.ONCLICK} element={<OnClick/>} />
					<Route path={SANDBOX_ROUTES.RAISING_EVENTS} element={<RaisingEvents/>} />
				</Route>
										{/* INTRODUCTION */}
				<Route path={SANDBOX_ROUTES.INTRODACTION_FOLDER} element={<Babel/>} />
										{/* ITERATION */}
				<Route path={SANDBOX_ROUTES.ITERATION_FOLDER} element={<Loops/>} />
										{/* MUI SANDBOX */}
				<Route path={SANDBOX_ROUTES.MUISANDBOX} element={<MuiSandbox />}>
					<Route path={SANDBOX_ROUTES.LAYOUTMENU} element={<LayoutMenu />}>
						<Route path={SANDBOX_ROUTES.MUIBOX} element={<MuiBox />} />
						<Route
							path={SANDBOX_ROUTES.MUICONTAINER}
							element={<MuiContainer />}
						/>
						<Route path={SANDBOX_ROUTES.MUIGRID} element={<MuiGrid />} />
						<Route path={SANDBOX_ROUTES.MUISTACK} element={<MuiStack />} />
					</Route>

					<Route path={SANDBOX_ROUTES.DATAMENU} element={<DataMenu />}>
						<Route path={SANDBOX_ROUTES.MUIBUTTON} element={<MuiButton />} />
						<Route path={SANDBOX_ROUTES.MUIDIVIDER} element={<MuiDivider />} />
						<Route
							path={SANDBOX_ROUTES.MUITYPOGRAPHY}
							element={<MuiTypography />}
						/>
					</Route>
				</Route>
											 {/* PROPS */}
				<Route path={SANDBOX_ROUTES.PROPS} element={<PropsMenu />}>
					<Route
						path={SANDBOX_ROUTES.PROPS_OBJECT}
						element={<FatherPropsObject />}
					/>
					<Route
						path={SANDBOX_ROUTES.PROPS_STRING}
						element={<FatherPropsString />}
					/>
					<Route path={SANDBOX_ROUTES.PROPS_TYPESCRIPT} element={<PropsTs />} />
					<Route
						path={SANDBOX_ROUTES.PROPS_TWO_KEYS}
						element={<FatherPropsTwoKeys />}
					/>
				</Route>	
				{/* Use-State folder */}
				<Route path={SANDBOX_ROUTES.USESTATEMENU} element={<UseMenu />}>
					<Route path={SANDBOX_ROUTES.SETPOSTS} element={<SetPosts />} />
					<Route path={SANDBOX_ROUTES.USESTATE} element={<UseState />} />
					<Route
						path={SANDBOX_ROUTES.USE_STATE_WITH_FUNCTION}
						element={<UseStateWithFunction />}
					/>
					<Route
						path={SANDBOX_ROUTES.USE_STATE_WITH_OBJECT}
						element={<UseStateWithObject />}
					/>
					<Route
						path={SANDBOX_ROUTES.USE_STATE_WITH_ARRAY_OF_OBJECT}
						element={<UseStateWithArrayOfObjects />}
					/>
					<Route
						path={SANDBOX_ROUTES.USE_STATE_WITH_COMPLEX_OBJECT}
						element={<UseStateWithComplexObject />}
					/>
				</Route>
				
											{/* 07.05.23 */}
				<Route path={SANDBOX_ROUTES.LIFECYCLE} element={<LifeCycleHooks />}>
					<Route path={SANDBOX_ROUTES.INITIAL} element={<InitialCycle />} />
					<Route path={SANDBOX_ROUTES.USE_STATE} element={<UseStateCycle />} />
					<Route
						path={SANDBOX_ROUTES.DID_MOUNT}
						element={<UseEffectAsComponentDidMount />}
					/>

					<Route
						path={SANDBOX_ROUTES.DID_UPDATE}
						element={<UseEffectAsComponentDidUpdate />}
					/>

					<Route
						path={SANDBOX_ROUTES.WILL_UNMOUNT}
						element={<UseEffectAsComponentWillUnmount />}
					/>
					<Route
						path={SANDBOX_ROUTES.NO_DEPENDENCIES}
						element={<UseEffectNoDependencies />}
					/>
					<Route
						path={SANDBOX_ROUTES.LIFECYCLE_EXE}
						element={<LifeCycleExe />}
					/>
				</Route>
				<Route path={SANDBOX_ROUTES.CUSTOM} element={<CustomHookMenu />}>
					<Route
						path={SANDBOX_ROUTES.CUSTOM_COUNTER}
						element={<CustomCounterHook />}
					/>
					<Route path={SANDBOX_ROUTES.CUSTOM_NAME} element={<CustomName />} />
				</Route>
				<Route path={SANDBOX_ROUTES.MEMOIZATION} element={<Memoization />}>
					<Route path={SANDBOX_ROUTES.USECALLBACK} element={<UseCallback />} />
					<Route path={SANDBOX_ROUTES.USEMEMO} element={<UseMemo />} />
				</Route>

				<Route path={SANDBOX_ROUTES.CONTEXT} element={<ContextMenu />}>
					<Route path={SANDBOX_ROUTES.NAME} element={<A />} />
					<Route path={SANDBOX_ROUTES.SNACK} element={<SnackExample />} />
				</Route>
				<Route path={SANDBOX_ROUTES.FORM} element={<FormTest/>}/>
			</Route>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	)
}

export default Router
