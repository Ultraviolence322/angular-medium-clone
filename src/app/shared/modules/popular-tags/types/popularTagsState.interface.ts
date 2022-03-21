import { TagType } from "src/app/shared/types/tag.type";

export interface PopularTagsStateInterface {
  isLoading: boolean,
  tags: TagType[] | null,
  error: string | null
}