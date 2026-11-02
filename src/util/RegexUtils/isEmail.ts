/*
 * Copyright (c) 2023 Jiovan Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import { EMAIL_REGEX } from '@/constant/regex-pattern';


/**
 * Returns whether the given text is a valid email address
 *
 * @param text The text to check
 *
 * @returns whether the given text is a valid email address
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isEmail(undefined);                      // false
 * isEmail('user@example.com');             // true
 * isEmail('abc-def@example.com');          // true
 * isEmail('张三@example.com');              // true
 * isEmail('user@exa!mple.com');            // false
 * isEmail('user@example.com.');            // false
 * isEmail('invalid-email');                // false
 * ```
 */
export function isEmail(text?: string | null): boolean {
    return !!text && EMAIL_REGEX.test(text);
}
