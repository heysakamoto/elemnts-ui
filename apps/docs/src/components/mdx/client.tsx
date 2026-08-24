import { createContext, type PropsWithChildren, useContext } from "react";

const CodeBlockContext = createContext(false);
export const useCodeBlockContext = () => useContext(CodeBlockContext);

export const CodeBlockProvider = ({ children }: PropsWithChildren) => {
	return (
		<CodeBlockContext.Provider value={true}>
			{children}
		</CodeBlockContext.Provider>
	);
};

const CodeBlockTabsContext = createContext(false);
export function useCodeBlockTabsContext() {
	const context = useContext(CodeBlockTabsContext);
	return context;
}

export const CodeBlockTabsProvider = ({ children }: PropsWithChildren) => {
	return (
		<CodeBlockTabsContext.Provider value={true}>
			<CodeBlockProvider>{children}</CodeBlockProvider>
		</CodeBlockTabsContext.Provider>
	);
};
