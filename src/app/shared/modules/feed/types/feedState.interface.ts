import { getFeedResponseInterface } from "./getFeedResponse.interface"

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  feed: getFeedResponseInterface | null
}