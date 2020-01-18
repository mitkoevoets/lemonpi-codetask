import { Dictionary } from 'app/utils/dictionary';

import * as translations from '../../assets/trans/en';

export interface transPayload {
  [key: string]: string;
}

export function trans(keyString: any, payload: transPayload = {}): string {
  if (!keyString) {
    return 'invalid~trans~key';
  }

  const keyObject = keyString.split('.');

  if (keyObject.length !== 2) {
    return 'invalid~trans~key';
  }

  const dictionary: Dictionary<string> = getDictionary(keyObject[0]);

  const key = keyObject[1];

  if (Object.keys(payload).length > 0) {
    return transFormat(dictionary[key], payload);
  }

  return dictionary[key] || keyString;
}

function getDictionary(category: string): Dictionary<string> {
  return translations[category as keyof typeof translations] || translations.general;
}

export function transFormat(unformattedString: string, payload: transPayload) {
  if (!unformattedString) {
    console.error('Unformatted string !!');
    return '';
  }

  return unformattedString.replace(/{@(\w+)@}/g, function(_, k) {
    return payload[k];
  });
}

export function getTransPayloadFromModel(model: any): transPayload {
  // TODO add type
  return model;
}
