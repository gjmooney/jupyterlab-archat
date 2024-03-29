import { HMSLogLevel, HMSReactiveStore } from '@100mslive/hms-video-store';
import { HMSPeer, HMSRoomProvider } from '@100mslive/react-sdk';

const hmsManager = new HMSReactiveStore();

interface ISessionStore {
  presenterId: HMSPeer;
  isPresenting: boolean;
  node: HTMLElement;
  canLoadModel: boolean;
  modelUrl: string;
}

const TypedHMSRoomProvider = HMSRoomProvider<{
  sessionStore: ISessionStore;
}>;

hmsManager.triggerOnSubscribe();

const hmsStore = hmsManager.getStore();
const hmsActions = hmsManager.getActions();
hmsActions.setLogLevel(HMSLogLevel.WARN);

export { TypedHMSRoomProvider, hmsActions, hmsStore };
