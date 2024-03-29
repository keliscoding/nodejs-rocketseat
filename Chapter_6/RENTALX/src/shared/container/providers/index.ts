import { container } from 'tsyringe';

import { IDateProvider  } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { IMailProvider } from './MailProvider/IMailProvider';
import { EtherealMailProvider } from './MailProvider/implementations/EtherealMailProvider';

container.registerSingleton<IDateProvider>(
    "DateProvider",
    DayjsDateProvider
)

container.registerSingleton<IMailProvider>("MailProvider", EtherealMailProvider);