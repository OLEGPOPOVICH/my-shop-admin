export const GLOBAL_LOADER = "GLOBAL_LOADER";
export const PAGE_LOADER = "PAGE_LOADER";

type GlobalLoaderActionType = {
  type: typeof GLOBAL_LOADER;
};

type PageLoaderActionType = {
  type: typeof PAGE_LOADER;
};

export type LoaderActionType = GlobalLoaderActionType | PageLoaderActionType;

export const toggleGlobalLoader = (): GlobalLoaderActionType => ({
  type: GLOBAL_LOADER,
});

export const togglePageLoader = (): PageLoaderActionType => ({
  type: PAGE_LOADER,
});
