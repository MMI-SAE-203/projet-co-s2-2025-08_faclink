const croix = new Proxy({"src":"/_astro/croix.C9FGVNMS.webp","width":152,"height":168,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/assets/croix.webp";
							}
							
							return target[name];
						}
					});

export { croix as c };
