import { SearchDrawer } from "./components/drawer";
import { SearchRoot } from "./components/root";
import { SearchRootProvider } from "./components/root-provider";

export const Search = Object.assign(SearchDrawer, {
	Root: SearchRoot,
	Drawer: SearchDrawer,
	RootProvider: SearchRootProvider,
});

export { useSearchContext } from "./components/client";
