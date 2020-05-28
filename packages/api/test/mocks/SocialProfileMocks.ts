import { SocialAccount, Profile, BlockNumber, Moment, WhoAndWhen } from '@subsocial/types/src/substrate/interfaces/';
import BN from 'bn.js';
import { u32, Text } from '@polkadot/types';
import { ProfileContent, ProfileData } from '@subsocial/types/src';
import { mockAccountAlice, mockAccountBob } from './AccountMocks';

export const mockSocialAccountAlice = {
  reputation: new BN(100) as u32,
  followers_count: new BN(23) as u32,
  following_blogs_count: new BN(15) as u32,
  following_accounts_count: new BN(122) as u32
} as SocialAccount

export const mockProfileAlice = {
  username: 'alice' as unknown as Text,
  created: {
    account: mockAccountAlice,
    block: new BN(12345) as BlockNumber,
    time: new BN(1586523823996) as Moment
  } as WhoAndWhen,
} as Profile

export const mockContentAlice = {
  about: 'About of Alice',
  fullname: 'Alice Allison',
  avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD\\/\\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'
} as ProfileContent

export const mockProfileDataAlice = {
  struct: mockSocialAccountAlice,
  profile: mockProfileAlice,
  content: mockContentAlice
} as ProfileData

export const mockSocialAccountBob = {
  reputation: new BN(100) as u32,
  followers_count: new BN(23) as u32,
  following_blogs_count: new BN(15) as u32,
  following_accounts_count: new BN(122) as u32
} as SocialAccount

export const mockProfileBob = {
  username: 'bobby' as unknown as Text,
  created: {
    account: mockAccountBob,
    block: new BN(12345) as BlockNumber,
    time: new BN(1586523823996) as Moment
  } as WhoAndWhen,
} as Profile

export const mockContentBob = {
  about: 'About of Bob',
  fullname: 'Bob Bobster',
  avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD\\/\\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'
} as ProfileContent

export const mockProfileDataBob = {
  struct: mockSocialAccountBob,
  profile: mockProfileBob,
  content: mockContentBob
} as ProfileData

export const profilesData: ProfileData[] = [
  mockProfileDataAlice,
  mockProfileDataBob
]
