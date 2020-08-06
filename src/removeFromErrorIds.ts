export default function removeFromErrorIds(errorIds: string[], ...ids: string[]): string[] {
    return errorIds.filter((id) => ids.every((idToRemove) => idToRemove !== id));
}